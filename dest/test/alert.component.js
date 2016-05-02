System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1;
    var AlertComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            AlertComponent = (function () {
                function AlertComponent() {
                    this.alerts = [
                        {
                            type: 'danger',
                            msg: 'Oh snap! Change a few things up and try submitting again.'
                        },
                        {
                            type: 'success',
                            msg: 'Well done! You successfully read this important alert message.',
                            closable: true
                        }
                    ];
                }
                AlertComponent.prototype.closeAlert = function (i) {
                    this.alerts.splice(i, 1);
                };
                AlertComponent.prototype.addAlert = function () {
                    this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
                };
                AlertComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: './src/test/alert-demo.html',
                        directives: [ng2_bootstrap_1.Alert, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlertComponent);
                return AlertComponent;
            }());
            exports_1("AlertComponent", AlertComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUE7b0JBQ1csV0FBTSxHQUFrQjt3QkFDM0I7NEJBQ0ksSUFBSSxFQUFFLFFBQVE7NEJBQ2QsR0FBRyxFQUFFLDJEQUEyRDt5QkFDbkU7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFNBQVM7NEJBQ2YsR0FBRyxFQUFFLGdFQUFnRTs0QkFDckUsUUFBUSxFQUFFLElBQUk7eUJBQ2pCO3FCQUNKLENBQUM7Z0JBU04sQ0FBQztnQkFQVSxtQ0FBVSxHQUFqQixVQUFrQixDQUFTO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBRU0saUNBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQXpCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNmLFdBQVcsRUFBRSw0QkFBNEI7d0JBQ3pDLFVBQVUsRUFBRSxDQUFDLHFCQUFLLEVBQUUsd0JBQWUsQ0FBQztxQkFDdkMsQ0FBQzs7a0NBQUE7Z0JBc0JGLHFCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCwyQ0FvQkMsQ0FBQSIsImZpbGUiOiJ0ZXN0L2FsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy90ZXN0L2FsZXJ0LWRlbW8uaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbQWxlcnQsIENPUkVfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgYWxlcnRzOiBBcnJheTxPYmplY3Q+ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBtc2c6ICdXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLicsXHJcbiAgICAgICAgICAgIGNsb3NhYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBbGVydChpOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goeyBtc2c6ICdBbm90aGVyIGFsZXJ0IScsIHR5cGU6ICd3YXJuaW5nJywgY2xvc2FibGU6IHRydWUgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
