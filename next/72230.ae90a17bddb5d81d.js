(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72230],{72230:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';\nimport {delay, filter, type Observable, of, startWith, Subject, switchMap} from 'rxjs';\n\nclass User {\n    constructor(\n        protected readonly firstName: string,\n        protected readonly lastName: string,\n        protected readonly avatarUrl: string | null = null,\n    ) {}\n\n    protected toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: readonly User[] = [\n    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),\n    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),\n    new User('Dmitriy', 'Demenskiy'),\n    new User('Evgeniy', 'Mamaev'),\n    new User('Ivan', 'Ishmametiev'),\n    new User('Igor', 'Katsuba'),\n    new User('Yulia', 'Tsareva'),\n];\n\n@Component({\n    selector: 'tui-multi-select-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiMultiSelectExample2 {\n    protected readonly search$ = new Subject<string | null>();\n\n    protected readonly items$: Observable<readonly User[] | null> = this.search$.pipe(\n        filter(value => value !== null),\n        switchMap(search =>\n            this.serverRequest(search).pipe(startWith<readonly User[] | null>(null)),\n        ),\n        startWith(databaseMockData),\n    );\n\n    protected readonly testValue = new FormControl([databaseMockData[0]]);\n\n    protected onSearchChange(searchQuery: string | null): void {\n        this.search$.next(searchQuery);\n    }\n\n    /**\n     * Server request emulation\n     */\n    private serverRequest(searchQuery: string | null): Observable<readonly User[]> {\n        const result = databaseMockData.filter(user =>\n            TUI_DEFAULT_MATCHER(user, searchQuery || ''),\n        );\n\n        return of(result).pipe(delay(Math.random() * 1000 + 500));\n    }\n}\n"}}]);