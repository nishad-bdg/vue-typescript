<template>
  <div>
    <p>{{ title }}</p>
    {{ name }}
    <p><input type="text" v-model="name" /></p>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Tutorial = namespace("Tutorial");

@Component
export default class About extends Vue {
  private name: string = ''

  @Tutorial.State
  public title!: string;

  @Tutorial.Getter
  public titleUpperCase!: string;

  @Tutorial.Action
  public updateTitle!: (newTitle: string) => void;

  public hello():void{
    alert("hello")
  }
}
</script>