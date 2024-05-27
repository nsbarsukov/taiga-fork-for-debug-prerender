(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36012],{36012:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce';\nimport {TuiDataListWrapperModule} from '@taiga-ui/kit';\nimport {TuiSelectModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [ReactiveFormsModule, TuiSelectModule, TuiDataListWrapperModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly items = [\n        '6734567890123456',\n        '5536567890123456',\n        '2202567890123456',\n        '4405567890123456',\n        '4000567890123456',\n    ];\n\n    protected parametersForm = new FormGroup({\n        cardNumber: new FormControl(''),\n    });\n\n    protected get paymentSystem(): string | null {\n        const {cardNumber} = this.parametersForm.value;\n\n        return tuiGetPaymentSystem(cardNumber ?? '');\n    }\n}\n"}}]);