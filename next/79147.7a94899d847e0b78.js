(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79147],{79147:n=>{n.exports="import {Component, ViewChild} from '@angular/core';\nimport {\n    type AbstractControl,\n    FormArray,\n    FormControl,\n    FormGroup,\n    type ValidationErrors,\n    type ValidatorFn,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-field-error-pipe-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiFieldErrorPipeExample4 {\n    @ViewChild('phoneErrorContent')\n    protected phoneErrorContent: PolymorpheusContent;\n\n    protected testForm = new FormGroup({\n        phones: new FormArray(\n            [new FormControl('', [Validators.required, this.getPhoneLengthValidator()])],\n            [this.getPhoneArrayValidator()],\n        ),\n    });\n\n    protected get formData(): FormArray {\n        return this.testForm.get('phones') as FormArray;\n    }\n\n    protected addPhone(): void {\n        this.formData.push(new FormControl('', this.addValidators()));\n    }\n\n    protected removePhone(index: number): void {\n        this.formData.removeAt(index);\n\n        let n = 0;\n\n        while (n <= 1 && this.formData.controls[n]) {\n            this.formData.controls[n].setValidators([\n                Validators.required,\n                this.getPhoneLengthValidator(),\n            ]);\n            n++;\n        }\n    }\n\n    protected addValidators(): ValidationErrors | null {\n        return this.formData.controls.length < 2\n            ? [Validators.required, this.getPhoneLengthValidator()]\n            : null;\n    }\n\n    private getPhoneLengthValidator(): (\n        field: AbstractControl,\n    ) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value.length !== 12\n                ? {\n                      length: new TuiValidationError(this.phoneErrorContent),\n                  }\n                : null;\n    }\n\n    private getPhoneArrayValidator(): ValidatorFn {\n        return ((array: FormArray): ValidationErrors | null =>\n            array.controls.length < 2 ||\n            (!!array.controls.filter(item => item.errors).length && array.controls.length)\n                ? {\n                      length: new TuiValidationError(\n                          'You should add at least 2 phone number',\n                      ),\n                  }\n                : null) as ValidatorFn;\n    }\n}\n"}}]);