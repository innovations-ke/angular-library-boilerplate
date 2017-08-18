import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { SampleDirective } from './sample/sample.directive';
import { SamplePipe } from './sample/sample.pipe';
import { SampleService } from './sample/sample.service';

export * from './sample/sample.component';
export * from './sample/sample.directive';
export * from './sample/sample.pipe';
export * from './sample/sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
