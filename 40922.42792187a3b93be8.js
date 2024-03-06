(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[40922],{40922:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiFileLike} from '@taiga-ui/kit';\nimport type {Observable} from 'rxjs';\nimport {finalize, map, of, Subject, switchMap, timer} from 'rxjs';\n\n@Component({\n    selector: 'tui-input-files-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputFilesExample1 {\n    protected readonly control = new FormControl<TuiFileLike | null>(null);\n    protected readonly failedFiles$ = new Subject<TuiFileLike | null>();\n    protected readonly loadingFiles$ = new Subject<TuiFileLike | null>();\n    protected readonly loadedFiles$ = this.control.valueChanges.pipe(\n        switchMap(file => this.processFile(file)),\n    );\n\n    protected removeFile(): void {\n        this.control.setValue(null);\n    }\n\n    protected processFile(file: TuiFileLike | null): Observable<TuiFileLike | null> {\n        this.failedFiles$.next(null);\n\n        if (this.control.invalid || !file) {\n            return of(null);\n        }\n\n        this.loadingFiles$.next(file);\n\n        return timer(1000).pipe(\n            map(() => {\n                if (Math.random() > 0.5) {\n                    return file;\n                }\n\n                this.failedFiles$.next(file);\n\n                return null;\n            }),\n            finalize(() => this.loadingFiles$.next(null)),\n        );\n    }\n}\n"}}]);