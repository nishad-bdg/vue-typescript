/* eslint-disable */
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: "user" })
export default class User extends VuexModule {
    // state
    firstName = "Foo";
    lastName = "Bar";

    // getters
    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    // mutations
    @Mutation
    setFirstName(firstName: string) {
        this.firstName = firstName;
    }
    @Mutation
    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    // actions
    @Action({ rawError: true })
    updateName(newName: string) {
        this.context.commit('setFirstName', newName)
    }
}
