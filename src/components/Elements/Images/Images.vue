<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Distribute components into separate files</li>
      </ul>
  </b-alert>

</div>
```

<h3>Standard</h3>
<p></p>

```js
<template>
  <div class="p-3 d-inline-flex">
      <b-img class="img-fluid" :src="images.sample" draggable="false"></b-img>
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

<h3>Standard (Downloadable)</h3>
<p></p>

```js
<template>
  <div class="p-3 d-inline-flex">
    <a :href="images.sample" download>
      <b-img class="img-fluid" :src="images.sample" draggable="false"></b-img>
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


<h3>Thumbnail</h3>
<p></p>

```js

<div class="btn border-dark p-3 text-center">
  <a href="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png">
    <div class="center-cropped" style="backgroundImage: url(http://sandcastle.co/cdn/ebydesign/triton/hello-world.png)">
      <b-img class="img-fluid" src="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" />
    </div>
  </a>
</div>

```

</docs>
