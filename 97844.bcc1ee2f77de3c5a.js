(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97844],{97844:e=>{e.exports="import {NgForOf, NgIf, SlicePipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAvatarComponent, TuiChipDirective} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiChipDirective, NgForOf, NgIf, TuiAvatarComponent, SlicePipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly sizes = ['m', 's', 'xs', 'xxs'] as const;\n}\n"}}]);