(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78946],{78946:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {type TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: 'tui-sheet-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSheetExample6 {\n    protected open = false;\n\n    protected readonly options: Partial<TuiSheetOptions> = {\n        overlay: true,\n        stops: ['5rem'],\n    };\n\n    protected readonly images = [\n        'https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg',\n        'https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg',\n        'https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg',\n        'https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg',\n        'https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg',\n    ];\n\n    protected toggle(): void {\n        this.open = !this.open;\n    }\n\n    protected onIntersection(\n        [{isIntersecting}]: IntersectionObserverEntry[],\n        {classList}: HTMLElement,\n    ): void {\n        classList.toggle('_visible', isIntersecting);\n    }\n}\n"}}]);