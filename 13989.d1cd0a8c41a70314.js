"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13989],{13989:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {\n    TuiHint,\n    tuiSvgOptionsProvider,\n    TuiTextfieldOptionsDirective,\n} from '@taiga-ui/core';\nimport {tuiKitIcons} from '@taiga-ui/icons';\nimport {TuiInputDateRangeModule} from '@taiga-ui/legacy';\n\nconst MAPPER: Record<string, string> = {\n    ...tuiKitIcons,\n    // override default key-value associations\n    tuiIconCalendarLarge: 'date_range-24px',\n    tuiIconHelpCircle: 'help-24px',\n    tuiIconInfo: 'info-16px',\n    tuiIconClose: 'clear-24px',\n    tuiIconChevronLeftLarge: 'keyboard_arrow_left-24px',\n    tuiIconChevronRightLarge: 'keyboard_arrow_right-24px',\n};\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiInputDateRangeModule,\n        TuiHint,\n        TuiTextfieldOptionsDirective,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    providers: [\n        /**\n         * @note:\n         * As usual with the DI this is hierarchical.\n         * Meaning you can provide different TUI_SVG_OPTIONS\n         * and use different icons across your app.\n         *\n         * The best way to keep all svg options at the top level of your app (e.g. AppModule).\n         */\n        tuiSvgOptionsProvider({\n            /**\n             * @note:\n             * This assumes that icons were properly processed.\n             * For example the `keyboard_arrow_left-24px.svg, ...` icons\n             * already placed in ./assets/icons/ directory\n             */\n            path: name => `assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`,\n        }),\n    ],\n})\nexport default class ExampleComponent {\n    protected date = null;\n}\n"}}]);