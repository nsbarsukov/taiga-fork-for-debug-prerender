"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33407],{33407:n=>{n.exports='<div class="tui-player">\n    <audio\n        #audio\n        src="assets/media/strays.mp3"\n        tuiMedia\n        [(currentTime)]="currentTime"\n        [(paused)]="paused"\n    ></audio>\n    <button\n        appearance="secondary"\n        title="Play/Pause"\n        tuiIconButton\n        type="button"\n        [iconLeft]="icon"\n        [style.border-radius.%]="100"\n        (click)="toggleState()"\n    ></button>\n    <div>\n        <a\n            href="https://waterplea.bandcamp.com/"\n            tuiLink\n        >\n            Waterplea\n        </a>\n        \u2014 Strays\n        <input\n            step="any"\n            tuiSlider\n            type="range"\n            class="slider"\n            [max]="audio.duration"\n            [(ngModel)]="currentTime"\n        />\n    </div>\n</div>\n'}}]);