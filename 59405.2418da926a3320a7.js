(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59405],{59405:e=>{e.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiInputPhoneModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [ReactiveFormsModule, TuiInputPhoneModule, TuiButtonDirective, JsonPipe],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected testForm = new FormGroup({\n        testValue: new FormControl('+77777777777', Validators.required),\n    });\n\n    protected setValue(): void {\n        this.testForm.get('testValue')!.setValue('+79926775676');\n    }\n}\n"}}]);