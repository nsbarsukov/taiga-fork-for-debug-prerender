(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[20267],{20267:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLetDirective} from '@taiga-ui/cdk';\nimport {TuiLoaderComponent, TuiTooltipModule} from '@taiga-ui/core';\nimport {interval, map, startWith} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiTooltipModule, TuiLoaderComponent, TuiLetDirective, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected isLoading$ = interval(2000).pipe(\n        map(i => Boolean(i % 2)),\n        startWith(true),\n    );\n}\n"}}]);