import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import type {
    TuiBooleanHandler,
    TuiFocusableElementAccessor,
    TuiMonth,
    TuiYear,
} from '@taiga-ui/cdk';
import {
    CHAR_EN_DASH,
    TUI_FALSE_HANDLER,
    tuiAsFocusableItemAccessor,
    tuiDateClamp,
    TuiDay,
    TuiMonthRange,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {TuiMonthPipe} from '@taiga-ui/core';
import type {TuiInputDateOptions} from '@taiga-ui/kit';
import {TUI_INPUT_DATE_OPTIONS} from '@taiga-ui/kit';
import {AbstractTuiNullableControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import {TUI_MONTH_FORMATTER, TUI_MONTH_FORMATTER_PROVIDER} from '@taiga-ui/legacy/tokens';

@Component({
    selector: 'tui-input-month-range',
    templateUrl: './input-month-range.template.html',
    styleUrls: ['./input-month-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputMonthRangeComponent),
        tuiAsControl(TuiInputMonthRangeComponent),
        TUI_MONTH_FORMATTER_PROVIDER,
        TuiMonthPipe,
    ],
})
export class TuiInputMonthRangeComponent
    extends AbstractTuiNullableControl<TuiMonthRange>
    implements TuiWithOptionalMinMax<TuiMonth>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected readonly formatter = inject(TUI_MONTH_FORMATTER);

    @Input()
    public min: TuiMonth = this.options.min;

    @Input()
    public max: TuiMonth = this.options.max;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiMonth> = TUI_FALSE_HANDLER;

    @Input()
    public minLength: number | null = null;

    @Input()
    public maxLength: number | null = null;

    @Input()
    public defaultActiveYear: TuiYear = TuiDay.currentLocal();

    public open = false;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    public computeValue(from: string | null, to: string | null): string {
        const formattedTo = from === to && this.focused && !this.readOnly ? '' : to;

        return `${from} ${CHAR_EN_DASH} ${formattedTo}`;
    }

    public onValueChange(value: string): void {
        if (value) {
            return;
        }

        this.value = null;
        this.onOpenChange(true);
    }

    public onMonthClick(month: TuiMonth): void {
        if (!this.value?.isSingleMonth) {
            this.writeValue(new TuiMonthRange(month, month));

            return;
        }

        this.value = TuiMonthRange.sort(this.value.from, month);
        this.close();
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get computedDefaultActiveYear(): TuiYear {
        return (
            this.value?.from || tuiDateClamp(this.defaultActiveYear, this.min, this.max)
        );
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    protected onActiveZone(focused: boolean): void {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        if (this.value?.isSingleMonth) {
            this.value = new TuiMonthRange(this.value.from, this.value.from);
        }
    }

    private close(): void {
        this.open = false;
    }
}
