import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiItemDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiGroupDirective,
    TuiOptionComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiBlockDirective,
    TuiItemsWithMoreComponent,
    TuiMoreDirective,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiGroupDirective,
        TuiItemsWithMoreComponent,
        TuiItemDirective,
        TuiBlockDirective,
        NgForOf,
        FormsModule,
        TuiMoreDirective,
        TuiDropdownOpenDirective,
        TuiDropdownOptionsDirective,
        TuiButtonDirective,
        TuiDropdownDirective,
        TuiBadgeDirective,
        TuiDataListComponent,
        NgIf,
        TuiOptionComponent,
        TuiSvgComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected value = this.items.map(TUI_FALSE_HANDLER) as boolean[];
}
