(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36749],{36749:e=>{e.exports="```ts\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\n// ...\n\n@Component({\n  standalone: true,\n  // ..\n})\nexport class AppComponent {\n  private readonly tableBarsService = inject(TuiTableBarsService);\n\n  @ViewChild('tableBarTemplate')\n  tableBarTemplate: TemplateRef<Record<string, unknown>>;\n\n  constructor() {\n    // ...\n    this.tableBarsService\n      .showTableBar(this.tableBarTemplate, {\n        mode: 'onLight',\n        hasCloseButton: true,\n      })\n      .subscribe();\n    // ...\n  }\n}\n```\n"}}]);