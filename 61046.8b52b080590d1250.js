"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[61046],{61046:t=>{t.exports='<tui-textfield iconRight="tuiIconSearch">\n    <label tuiLabel>Start typing</label>\n    <input\n        placeholder="I am placeholder"\n        tuiTextfield\n        [(ngModel)]="value"\n    />\n    <tui-tooltip content="Editable combo-box" />\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items | tuiFilterByInput"\n    />\n</tui-textfield>\n\n<tui-textfield tuiChevron>\n    <label tuiLabel>Select from options</label>\n    <select\n        placeholder="I am placeholder"\n        tuiTextfield\n        [(ngModel)]="value"\n    ></select>\n    <tui-tooltip content="Fixed choice select" />\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items"\n    />\n</tui-textfield>\n'}}]);