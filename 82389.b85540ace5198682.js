(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82389],{82389:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {TuiErrorComponent, TuiLabelDirective} from '@taiga-ui/core';\nimport {TuiSwitchComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [FormsModule, TuiLabelDirective, TuiSwitchComponent, TuiErrorComponent],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected enabled = false;\n\n    protected error = new TuiValidationError('An error');\n\n    protected get computedError(): TuiValidationError | null {\n        return this.enabled ? this.error : null;\n    }\n}\n"}}]);