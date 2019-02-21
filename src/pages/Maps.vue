<template>
  <div>
  <div id="contentLoad">
    <div class="margTop container myContStyle ">
      <div class="loadCont">
        <div class="loadCont">

          <div class="myMap">

            <!--preloader-->
            <div class="load">
              <hr />
              <hr />
              <hr />
              <hr />
            </div>





          <yandex-map
            :coords="[56.740204, 37.221203]"
            zoom="18"
            style="width: 100%; height: 500px;"
            :cluster-options="{
              1: {clusterDisableClickZoom: false}
            }"
            map-type="map"
            @map-was-initialized="initHandler"
          >

            <ymap-marker
              marker-id="1"
              marker-type="placemark"
              :coords="[56.740204, 37.221203]"
              hint-content="я живу здесь"
              :balloon="{header: '', body: 'AAAAAAAAAAAAAAA', footer: ''}"
              :icon="{color: '#11FF00', glyph: 'islands'}"
              cluster-name="1"
            ></ymap-marker>

          </yandex-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  export default{

  }



</script>

<style scoped>
  .load{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    /*change these sizes to fit into your project*/
    width:100px;
    height:100px;
  }
  .load hr{border:0;margin:0;width:30%;height:30%;position:absolute;border-radius:50%;animation:spin 2s ease infinite}

  .load :first-child{background:gray;animation-delay:-1.5s}
  .load :nth-child(2){background:gray;animation-delay:-1s}
  .load :nth-child(3){background:gray;animation-delay:-0.5s}
  .load :last-child{background:gray}

  @keyframes spin{
    0%,100%{transform:translate(0)}
    25%{transform:translate(160%)}
    50%{transform:translate(160%, 160%)}
    75%{transform:translate(0, 160%)}
  }
</style>
