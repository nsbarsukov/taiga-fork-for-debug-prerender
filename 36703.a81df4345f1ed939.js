"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36703],{36703:t=>{t.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiAsPortal, TuiPortalsComponent} from '@taiga-ui/cdk';\n\nimport {CustomPortalService} from './custom-portal.service';\n\n@Component({\n    standalone: true,\n    selector: 'custom-host',\n    templateUrl: './custom-host.template.html',\n    styleUrls: ['./custom-host.style.less'],\n    changeDetection,\n    providers: [tuiAsPortal(CustomPortalService)],\n})\nexport class CustomHostComponent extends TuiPortalsComponent {}\n"}}]);