System.register(['angular2/core', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_bootstrap_1;
    var DatePickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            DatePickerComponent = (function () {
                function DatePickerComponent() {
                    this.dt = new Date();
                    this.minDate = null;
                    this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
                    this.format = this.formats[0];
                    this.dateOptions = {
                        formatYear: 'YY',
                        startingDay: 1
                    };
                    this.opened = false;
                }
                DatePickerComponent.prototype.getDate = function () {
                    return this.dt && this.dt.getTime() || new Date().getTime();
                };
                DatePickerComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [ng2_bootstrap_1.Alert, ng2_bootstrap_1.DATEPICKER_DIRECTIVES],
                        template: "\n    <alert type=\"info\">ng2-bootstrap hello world!</alert>\n      <pre>Selected date is: <em *ngIf=\"dt\">{{ getDate() | date:'fullDate'}}</em></pre>\n      <h4>Inline</h4>\n      <div style=\"display:inline-block; min-height:290px;\">\n        <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\"></datepicker>\n      </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], DatePickerComponent);
                return DatePickerComponent;
            }());
            exports_1("DatePickerComponent", DatePickerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUFBO29CQUNTLE9BQUUsR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDO29CQUNwQixZQUFPLEdBQVEsSUFBSSxDQUFDO29CQUlwQixZQUFPLEdBQWlCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBQ2hGLFdBQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixnQkFBVyxHQUFPO3dCQUN4QixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsV0FBVyxFQUFFLENBQUM7cUJBQ2YsQ0FBQztvQkFDTSxXQUFNLEdBQVcsS0FBSyxDQUFDO2dCQUtqQyxDQUFDO2dCQUhRLHFDQUFPLEdBQWQ7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM5RCxDQUFDO2dCQTVCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxLQUFLO3dCQUNmLFVBQVUsRUFBRSxDQUFDLHFCQUFLLEVBQUUscUNBQXFCLENBQUM7d0JBQzFDLFFBQVEsRUFBRSxtV0FPVDtxQkFDRixDQUFDOzt1Q0FBQTtnQkFrQkYsMEJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHFEQWlCQyxDQUFBIiwiZmlsZSI6InRlc3QvZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBbGVydCwgREFURVBJQ0tFUl9ESVJFQ1RJVkVTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIGRpcmVjdGl2ZXM6IFtBbGVydCwgREFURVBJQ0tFUl9ESVJFQ1RJVkVTXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGFsZXJ0IHR5cGU9XCJpbmZvXCI+bmcyLWJvb3RzdHJhcCBoZWxsbyB3b3JsZCE8L2FsZXJ0PlxyXG4gICAgICA8cHJlPlNlbGVjdGVkIGRhdGUgaXM6IDxlbSAqbmdJZj1cImR0XCI+e3sgZ2V0RGF0ZSgpIHwgZGF0ZTonZnVsbERhdGUnfX08L2VtPjwvcHJlPlxyXG4gICAgICA8aDQ+SW5saW5lPC9oND5cclxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrOyBtaW4taGVpZ2h0OjI5MHB4O1wiPlxyXG4gICAgICAgIDxkYXRlcGlja2VyIFsobmdNb2RlbCldPVwiZHRcIiBbbWluRGF0ZV09XCJtaW5EYXRlXCIgW3Nob3dXZWVrc109XCJ0cnVlXCI+PC9kYXRlcGlja2VyPlxyXG4gICAgICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCB7XHJcbiAgcHVibGljIGR0OkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgbWluRGF0ZTpEYXRlID0gbnVsbDtcclxuICBwcml2YXRlIGV2ZW50czpBcnJheTxhbnk+O1xyXG4gIHByaXZhdGUgdG9tb3Jyb3c6RGF0ZTtcclxuICBwcml2YXRlIGFmdGVyVG9tb3Jyb3c6RGF0ZTtcclxuICBwcml2YXRlIGZvcm1hdHM6QXJyYXk8c3RyaW5nPiA9IFsnREQtTU0tWVlZWScsICdZWVlZL01NL0REJywgJ0RELk1NLllZWVknLCAnc2hvcnREYXRlJ107XHJcbiAgcHJpdmF0ZSBmb3JtYXQgPSB0aGlzLmZvcm1hdHNbMF07XHJcbiAgcHJpdmF0ZSBkYXRlT3B0aW9uczphbnkgPSB7XHJcbiAgICBmb3JtYXRZZWFyOiAnWVknLFxyXG4gICAgc3RhcnRpbmdEYXk6IDFcclxuICB9O1xyXG4gIHByaXZhdGUgb3BlbmVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGdldERhdGUoKTpudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZHQgJiYgdGhpcy5kdC5nZXRUaW1lKCkgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
