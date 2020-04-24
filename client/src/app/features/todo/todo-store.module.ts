import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName } from 'src/app/store/states/todo.state';
import { reducer } from 'src/app/store/states/reducers/todo.reducer';
import { TodoEffects } from 'src/app/store/states/effects/todo.effect';



@NgModule({
    imports: [
        StoreModule.forFeature(featureName, reducer),
        EffectsModule.forFeature([TodoEffects]),
    ],
})
export class TodoStoreModule { }