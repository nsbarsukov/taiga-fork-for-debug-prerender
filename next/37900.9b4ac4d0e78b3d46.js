(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[37900],{37900:e=>{e.exports="import {Injectable} from '@angular/core';\nimport {TuiFormatDateService} from '@taiga-ui/core';\nimport {formatDistance} from 'date-fns';\nimport type {Observable} from 'rxjs';\nimport {map, timer} from 'rxjs';\n\n@Injectable()\nexport class FormatService extends TuiFormatDateService {\n    public override format(timestamp: number): Observable<string> {\n        return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));\n    }\n}\n"}}]);