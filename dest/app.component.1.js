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
    var AppComponent;
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
            AppComponent = (function () {
                function AppComponent() {
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
                AppComponent.prototype.closeAlert = function (i) {
                    this.alerts.splice(i, 1);
                };
                AppComponent.prototype.addAlert = function () {
                    this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'alert-demo',
                        templateUrl: './src/alert-demo.html',
                        directives: [ng2_bootstrap_1.Alert, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO29CQUNXLFdBQU0sR0FBa0I7d0JBQzNCOzRCQUNJLElBQUksRUFBRSxRQUFROzRCQUNkLEdBQUcsRUFBRSwyREFBMkQ7eUJBQ25FO3dCQUNEOzRCQUNJLElBQUksRUFBRSxTQUFTOzRCQUNmLEdBQUcsRUFBRSxnRUFBZ0U7NEJBQ3JFLFFBQVEsRUFBRSxJQUFJO3lCQUNqQjtxQkFDSixDQUFDO2dCQVNOLENBQUM7Z0JBUFUsaUNBQVUsR0FBakIsVUFBa0IsQ0FBUztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUVNLCtCQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQztnQkF6Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsV0FBVyxFQUFFLHVCQUF1Qjt3QkFDcEMsVUFBVSxFQUFFLENBQUMscUJBQUssRUFBRSx3QkFBZSxDQUFDO3FCQUN2QyxDQUFDOztnQ0FBQTtnQkFzQkYsbUJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHVDQW9CQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhbGVydC1kZW1vJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcmMvYWxlcnQtZGVtby5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtBbGVydCwgQ09SRV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgYWxlcnRzOiBBcnJheTxPYmplY3Q+ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBtc2c6ICdXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLicsXHJcbiAgICAgICAgICAgIGNsb3NhYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBbGVydChpOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEFsZXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goeyBtc2c6ICdBbm90aGVyIGFsZXJ0IScsIHR5cGU6ICd3YXJuaW5nJywgY2xvc2FibGU6IHRydWUgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
