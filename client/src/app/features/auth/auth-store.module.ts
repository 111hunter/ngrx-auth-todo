import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName } from 'src/app/store/states/user.state';
import { reducer } from 'src/app/store/states/reducers/user.reducer';
import { UserEffects } from 'src/app/store/states/effects/user.effect';



@NgModule({
    imports: [
        StoreModule.forFeature(featureName, reducer),
        EffectsModule.forFeature([UserEffects]),
    ],
})
export class AuthStoreModule { }