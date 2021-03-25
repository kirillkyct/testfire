<template>
  <div>
    <div class="center-block">
      <div class="roul-wrapper">
        <div class="case" v-if="roulBtn.active">
          <img src="/img/case1.webp">
          <img src="/img/case2.webp">
        </div>
        <div class="roul-list__wrapper">
            <div class="roul-list-container">
              <div class="roul-list"
                :class="{
                  'animate-1': !roulBtn.active && animateType == 1,
                  'animate-2': !roulBtn.active && animateType == 2,
                  'animate-3': !roulBtn.active && animateType == 3,
                  'animate-4': !roulBtn.active && animateType == 4,
                  'animate-5': !roulBtn.active && animateType == 5,
                }">
                  <div v-for="(item, index) in roulContent.items" :key="index" class="roul-item"
                    :class="{
                      'item-type-1': item.class === 'item-type-1',
                      'item-type-2': item.class === 'item-type-2',
                      'item-type-3': item.class === 'item-type-3',
                      'item-type-4': item.class === 'item-type-4',
                      'item-type-5': item.class === 'item-type-5',
                    }"
                  >
                    <img :src="item.img">
                    <div class="roul-item__name">{{ item.title }}</div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="roul-btn__wrapper">
      <div :class="{disabled: !this.roulBtn.active}" class="roul-btn" @click="roulStart"> {{ roulBtn.active ? roulBtn.good : roulBtn.bad }} </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roulContent: {
      type: Object,
      required: true,
    }
  },

  created() {
    this.roulContent.items.sort(() => Math.random() - 0.5)
    this.roulContent.items.splice(this.roulContent.items.length - 2, 0, this.roulContent.prize)

    for(let i = 0; i < 5; i++) {
      this.roulListPreview.push(this.roulContent.items[i])
    }
    this.roulListPreview.sort(() => Math.random() - 0.5)
  },

  data() {
    return {
      roulBtn: {
        active: true,
        good: 'Открыть',
        bad: 'Открытие...'
      },

      roulListPreview: [],

      animateType: null,
    }
  },

  methods: {
    rand(min, max) {
      return Math.round(min - 0.5 + Math.random() * (max - min + 1))
    },

    roulStart() {
      if(!this.roulBtn.active) return

      this.animateType = this.rand(1, 5)
      this.roulBtn.active = false

      setTimeout(() => {
        this.roulBtn.active = true
      }, 6500)
    }
  }
}
</script>

<style lang="scss">

  $widthItemFull: 1100px / 5;
  $lineItemsFull: -$widthItemFull * 19;

  .center-block {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .roul-wrapper {
      width: 1200px;
      height: 268px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background: yellow;
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        z-index: 6;
      }

      &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/img/bg-big.svg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
      }

      .case {
        background-image: url('/img/unopened-case-bg.png');
        position: absolute;
        background-size: 100%;
        background-position: 50%;
        width: 290px;
        z-index: 10;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        img {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
      }

      .roul-list__wrapper {
          position: absolute;
          max-width: 1100px;
          height: 168px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          z-index: 5;
          overflow: hidden;

          .roul-list-container {
            position: absolute;
            width: 1140px;
            margin-left: -550px;
            left: 50%;
          }

          &::before,
          &::after {
            height: 100%;
            box-shadow: 0 0 120px 150px #17171a;
            top: 0;
            z-index: 5;
            content: "";
            display: block;
            position: absolute;
          }

          &::before {
            left: 0;
          }

          &::after {
            right: 0;
          }

          .roul-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: max-content;
            // left: 0;
            transform: translateX(-440px);
            // margin-left: -440px;

            &.preview {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
            }

            @keyframes roul-1 {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX($lineItemsFull);
              }
            }

            @keyframes roul-2 {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX($lineItemsFull + 30px);
              }
            }

            @keyframes roul-3 {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX($lineItemsFull + 80px);
              }
            }

            @keyframes roul-4 {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX($lineItemsFull - 30px);
              }
            }

            @keyframes roul-5 {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX($lineItemsFull - 80px);
              }
            }

            &.animate-1 {
              left: 0;
              transform: translateX(0);
              animation: roul-1 6s ease;
            }

            &.animate-2 {
              left: 0;
              transform: translateX(0);
              animation: roul-2 6s ease;
            }

            &.animate-3 {
              left: 0;
              transform: translateX(0);
              animation: roul-3 6s ease;
            }

            &.animate-4 {
              left: 0;
              transform: translateX(0);
              animation: roul-4 6s ease;
            }

            &.animate-5 {
              left: 0;
              transform: translateX(0);
              animation: roul-5 6s ease;
            }

            .roul-item {
              width: $widthItemFull;
              height: 168px;
              background-size: cover;
              position: relative;

              &.item-type-1 {
                background-image: url('/img/upgrade-1.svg');
              }

              &.item-type-2 {
                background-image: url('/img/upgrade-2.svg');
              }

              &.item-type-3 {
                background-image: url('/img/upgrade-3.svg');
              }

              &.item-type-4 {
                background-image: url('/img/upgrade-4.svg');
              }

              &.item-type-5 {
                background-image: url('/img/upgrade-5.svg');
              }

              img {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                height: 109px;
              }

              .roul-item__name {
                position: absolute;
                bottom: 16px;
                color: #fff;
                left: 0;
                right: 0;
                margin: 0 auto;
                text-align: center;
                font-size: 14px;
                line-height: 16px;
                font-family: Arial;
              }
            }
          }
      }
  }

  .roul-btn__wrapper {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .roul-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
      background-image: url('/img/open-button-1.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 330px;
      height: 60px;
      color: #fff;
      font-family: Arial;
      transition: all .3s ease;
      cursor: pointer;

      &.disabled {
        cursor: not-allowed;
      }

      &:hover {
        filter: brightness(1.1);
      }
    }
  }


  @media screen and (max-width: 1230px) {
    .roul-wrapper {
      width: 1000px;

      &::before {
        bottom: 0;
        margin: auto;
        height: 230px;
      }
    }
    
    .roul-wrapper .roul-list__wrapper {
      max-width: 900px;
    }
  }

  @media screen and (max-width: 1050px) {
    .roul-wrapper {
      width: 800px;

      &::before {
        height: 168px;
      }
    }
    
    .roul-wrapper .roul-list__wrapper {
      max-width: 700px;
    }
  }

 @media screen and (max-width: 830px) {
    .roul-wrapper {
      width: 700px;
      height: 263px;
    }
    
    .roul-wrapper .roul-list__wrapper {
      max-width: 600px;
    }
  }

@media screen and (max-width: 830px) {
  .roul-wrapper {
    width: 700px;
    height: 263px;
  }
  
  .roul-wrapper .roul-list__wrapper {
    max-width: 600px;
  }
}

@media screen and (max-width: 618px) {
  .roul-wrapper {
    width: 700px;
    height: 263px;
  }
  
  .roul-wrapper .roul-list__wrapper {
    max-width: 600px;
  }
}
  
</style>