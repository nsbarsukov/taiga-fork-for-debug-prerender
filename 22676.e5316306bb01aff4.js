(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[22676],{22676:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiDecimalSymbol} from '@taiga-ui/core';\nimport {tuiFormatNumber} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [ReactiveFormsModule, TuiInputModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected parametersForm = new FormGroup({\n        value: new FormControl(123456.789),\n        precision: new FormControl(2),\n        decimalSeparator: new FormControl<TuiDecimalSymbol>('.'),\n        thousandSeparator: new FormControl(' '),\n    });\n\n    protected get formattedNumber(): string {\n        const {value, precision, decimalSeparator, thousandSeparator} =\n            this.parametersForm.value;\n\n        return tuiFormatNumber(value ?? 123456.789, {\n            precision: precision ?? 2,\n            decimalSeparator: decimalSeparator ?? '.',\n            thousandSeparator: thousandSeparator ?? ' ',\n        });\n    }\n}\n"}}]);