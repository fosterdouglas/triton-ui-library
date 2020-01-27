<docs>

<h3>Downloadable</h3>
<p></p>

```js
<template>
  <div class="p-3 d-inline-flex">
    <a :href="images.sample" download>
      <b-img :src="images.sample" draggable="false"></b-img>
      <i class="iconDownload imgIcon"></i>
    </a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                sample: require('../../../assets/hello-world.png')
            }
        }
    }
}
</script>
```

</docs>
