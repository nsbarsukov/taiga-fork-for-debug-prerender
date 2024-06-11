"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[57047],{57047:n=>{n.exports="import {AsyncPipe, NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport type {ValidatorFn} from '@angular/forms';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';\nimport type {TuiComparator} from '@taiga-ui/addon-table';\nimport {TuiTable} from '@taiga-ui/addon-table';\nimport {\n    TuiDay,\n    tuiDefaultSort,\n    TuiLetDirective,\n    TuiValidatorDirective,\n} from '@taiga-ui/cdk';\nimport {\n    TuiFormatNumberPipe,\n    TuiScrollbarComponent,\n    TuiSvgComponent,\n} from '@taiga-ui/core';\nimport {TuiDataListWrapper} from '@taiga-ui/kit';\nimport {\n    TuiInputDateModule,\n    TuiInputNumberModule,\n    TuiSelectModule,\n    TuiTextareaModule,\n} from '@taiga-ui/legacy';\n\ninterface Item {\n    readonly date: TuiDay;\n    readonly name: string;\n    readonly price: number;\n    readonly quantity: number;\n    readonly unit: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        TuiTable,\n        IntersectionObserverModule,\n        TuiTextareaModule,\n        FormsModule,\n        TuiInputNumberModule,\n        NgIf,\n        TuiValidatorDirective,\n        TuiInputDateModule,\n        TuiDataListWrapper,\n        TuiSelectModule,\n        NgForOf,\n        TuiLetDirective,\n        TuiScrollbarComponent,\n        TuiFormatNumberPipe,\n        AsyncPipe,\n        TuiSvgComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly options = {updateOn: 'blur'} as const;\n\n    protected readonly units = ['items', 'kg', 'm'];\n\n    protected pythons: readonly Item[] = [\n        {\n            name: 'Holy Grail',\n            price: 999999,\n            quantity: 1,\n            unit: this.units[0],\n            date: TuiDay.currentLocal(),\n        },\n        {\n            name: 'Foot',\n            price: 29.95,\n            quantity: 5,\n            unit: this.units[2],\n            date: TuiDay.currentLocal().append({day: -42}),\n        },\n        {\n            name: 'Shed',\n            price: 499,\n            quantity: 2,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -237}),\n        },\n    ];\n\n    protected starwars: readonly Item[] = [\n        {\n            name: 'Lightsaber',\n            price: 4999,\n            quantity: 3,\n            unit: this.units[0],\n            date: TuiDay.currentLocal(),\n        },\n        {\n            name: 'Spaceship',\n            price: 19999,\n            quantity: 1,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -237}),\n        },\n        {\n            name: 'Stormtrooper helmet',\n            price: 14.95,\n            quantity: 5,\n            unit: this.units[0],\n            date: TuiDay.currentLocal().append({day: -42}),\n        },\n    ];\n\n    protected readonly columns = ['name', 'price', 'quantity', 'unit', 'total'] as const;\n\n    protected readonly minPrice: ValidatorFn = ({value}) =>\n        value > 400 ? null : {minPrice: 'Price must be above $400'};\n\n    protected readonly totalSorter: TuiComparator<Item> = (a, b) =>\n        tuiDefaultSort(a.price * a.quantity, b.price * b.quantity);\n\n    protected trackByIndex(index: number): number {\n        return index;\n    }\n\n    protected getTotal({price, quantity}: Item): number {\n        return price * quantity;\n    }\n\n    protected onValueChange<K extends keyof Item>(\n        value: Item[K],\n        key: K,\n        current: Item,\n        data: readonly Item[],\n    ): void {\n        const updated = {...current, [key]: value};\n\n        this.pythons =\n            data === this.pythons\n                ? this.pythons.map(item => (item === current ? updated : item))\n                : this.pythons;\n\n        this.starwars =\n            data === this.starwars\n                ? this.starwars.map(item => (item === current ? updated : item))\n                : this.starwars;\n    }\n}\n"}}]);