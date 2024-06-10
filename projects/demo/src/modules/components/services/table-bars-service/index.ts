import type {OnDestroy} from '@angular/core';
import {Component, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiTableBarsService} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Subscription} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent implements OnDestroy {
    private readonly tableBarsService = inject(TuiTableBarsService);

    @ViewChild('tableBarTemplate')
    protected readonly tableBarTemplate: PolymorpheusContent;

    protected readonly exampleServiceUsage = import(
        './examples/import/service-usage.md?raw'
    );

    protected readonly exampleServiceUsageHtml = import(
        './examples/import/service-usage-html.md?raw'
    );

    protected readonly exampleLazyModule = import('./examples/import/lazy-module.md?raw');
    protected readonly exampleModule = import('./examples/import/import.md?raw');
    protected readonly exampleHtml = import('./examples/import/template.md?raw');

    protected readonly appearanceVariants = ['light', 'dark'] as const;

    protected appearance: 'dark' | 'light' = this.appearanceVariants[0];

    protected adaptive = false;

    protected hasCloseButton = false;

    protected subscription = new Subscription();

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    protected showTableBar(): void {
        this.subscription.unsubscribe();
        this.subscription = this.tableBarsService
            .open(this.tableBarTemplate || '', {
                adaptive: this.adaptive,
                appearance: this.appearance,
                hasCloseButton: this.hasCloseButton,
            })
            .subscribe();
    }

    protected destroy(): void {
        this.subscription.unsubscribe();
    }
}
