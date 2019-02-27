<template>
    <main>
        <div class="shops_info">
            <div class="shops_header_img">
                <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
            </div>
            <div class="shops_advertise">
                <p class="shops_name text-hidden">瓦香鸡米饭</p>
                <p class="shops_tag text-hidden">商家配送／分钟送达／配送费¥5</p>
                <p class="shops_annouce text-hidden">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
            </div>
        </div>
        <div class="shops_foods">
            <div class="shops_select">
                <span class="shops_goods">商品</span>
                <span class="shops_rating">评价</span>     
            </div>
            <div class="shops_content">
                <div class="goods_content">
                    <div class="goods_aside bscroll" ref="bscroll" >
                            <div class="bscroll-container" @click="typeHandler($event)">
                                <div class="goods_types">
                                    <span class="active">热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>面条🍜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                                <div class="goods_types">
                                    <span>热销榜</span>
                                </div>
                            </div>
                        
                    </div>
                    <div class="goods_details bscroll" ref="cscroll">
                        <div class="bscroll-container">
                            <div class="all_goods_item">
                                <p class="types_title">
                                    <span class="types_name">热销榜</span>
                                    <span class="types_description">是的分身乏术</span>
                                </p> 
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                            </div>
                            <div class="all_goods_item">
                                <p class="types_title">
                                    <span class="types_name">热销榜</span>
                                    <span class="types_description">是的分身乏术</span>
                                </p> 
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                            </div>
                            <div class="all_goods_item">
                                <p class="types_title">
                                    <span class="types_name">热销榜</span>
                                    <span class="types_description">是的分身乏术</span>
                                </p> 
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                            </div>
                            <div class="all_goods_item">
                                <p class="types_title">
                                    <span class="types_name">热销榜</span>
                                    <span class="types_description">是的分身乏术</span>
                                </p> 
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                                <div class="goods_container">
                                    <div class="food">
                                        <span class="is_new"><b>新品</b></span>
                                        <div class="food_img_wrapper">
                                            <img class="fill" src="@/../static/images/elmlogo.jpeg" alt="">
                                        </div>
                                        <div class="food_information">
                                            <p class="food_name">瓦香鸡</p>
                                            <p class="food_description">瓦香鸡很香</p>
                                            <p class="activity"><span>折扣</span></p>    
                                            <p class="food_price">￥20</p>
                                        </div>   
                                        <span class="is_main">招牌</span>
                                        <span class="add">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rating_content" v-show="false">

                </div>
            </div>
        </div> 
    </main>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name:"Shops",
    mounted(){
        this.initScrollTop();
        this.$nextTick(() => {
            let bscrollDom = this.$refs.bscroll;
            this.aBScroll = new BScroll(bscrollDom,{
                click:true
            })
            let cscrollDom = this.$refs.cscroll;
            this.aBScroll = new BScroll(cscrollDom,{
                click:true
            })
        })   
    },

    methods:{
        typeHandler(e){
            let goodsTypes = document.querySelectorAll('.goods_types span');
            for(let i=0;i<goodsTypes.length;i++){
                goodsTypes[i].className="";
            }
            e.target.className="active";
            console.log()
            console.log(e.target.className)
        },
        initScrollTop(){
            let doc = window.document.documentElement || window.document.body;
            doc.scrollTop=0;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/../static/scss/mixin.scss';
    .shops_info{
        color: #fff;
        background: url('./../../static/images/banner03.jpg') no-repeat center/cover;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        .shops_header_img{
            @include borderRadius(5px);
            overflow: hidden;
            width: 100px;
            margin-right: 20px;
        }
        .shops_advertise{
            flex: 1;
            p:not(:last-child){
                margin-bottom: 10px;
            }
            .shops_name{
                @include sc(22px,#fff);
                font-weight: bold;
            }
        }
        
    }
    .shops_foods{
        .shops_select{
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 2px 1px 1px rgba(0,0,0,0.1);
            span{
                display: inline-block;
                margin: 20px 90px;
                @include sc(20px,#333);
            }
        }
        .shops_content{
            margin-top: 2px;
            .goods_content{
                display: flex;
                justify-content: space-between;
                .goods_aside{
                    width: 120px;
                    height: 500px;
                    overflow: hidden;
                    .goods_types{
                        width: 100%;
                        text-align: center;
                        background: #f9f8f9; 
                        &:first-child{
                            span{
                                border-top: 0.1px solid #EDEDED;
                            }
                        }
                        span{
                            width: 100%;
                            display: inline-block;
                            line-height: 70px;
                            color: #666;
                            border-bottom: 0.1px solid #EDEDED;
                             &.active{
                                background: #fff;
                                border-left: 5px solid #3190e8;
                                font-weight: bold;
                            }
                        }
                    }
                }
                .goods_details{
                    flex: 1;
                    height: 11.1rem;
                    overflow: hidden;
                    .all_goods_item{
                        .types_title{
                            padding: 20px 20px;
                            background: #f9f8f9;
                            span{
                                display: inline-block;
                            }
                            .types_name{
                                @include sc(20px,#666);
                                font-weight: bold;
                            }
                            .types_description{
                                @include sc(12px,#ccc);
                                margin-left: 5px;
                            }
                        }
                        .goods_container{
                            .food{
                                position: relative;
                                display: flex;
                                padding: 5px;
                                overflow: hidden;
                                padding: 20px;
                                border-bottom: 0.1px solid #EDEDED;
                                .is_new{
                                    position: absolute;
                                    top: -24px;
                                    left: -26px;
                                    display: inline-block;
                                    vertical-align: bottom;
                                    @include wh(50px,50px);
                                    @include sc(10px,#fff);
                                    background: #4cd964;
                                    transform: rotate(-48deg);
                                    
                                    c{
                                        position: absolute;
                                        bottom: 0px;
                                        left: 8px;
                                    }
                                }
                                .is_main{
                                    position: absolute;
                                    top: 20px;
                                    right: 20px;
                                    overflow: hidden;
                                    @include sc(12px,rgb(240, 115, 115));
                                    border: 1px solid rgb(240, 115, 115);
                                    @include borderRadius(10px);
                                }
                                .food_img_wrapper{
                                    width: 80px;
                                    height: 80px;
                                    margin-right: 10px;
                                }
                                .food_information{
                                    p:not(:last-child){
                                        margin-bottom: 10px;
                                    }
                                    .food_name{
                                        @include sc(20px,#333);
                                        font-weight: bold;
                                    }
                                    .food_description{
                                        @include sc(12px,#ccc);
                                    }
                                    .activity{
                                        span{
                                            overflow: hidden;
                                            @include sc(12px,rgb(240, 115, 115));
                                            border: 1px solid rgb(240, 115, 115);
                                            @include borderRadius(10px);
                                            margin-right: 10px;
                                        }
                                    }
                                    .food_price{
                                        @include sc(16px,#f60);
                                        font-weight: bold;
                                    }
                                    
                                }
                                .add{
                                    position: absolute;
                                    bottom: 20px;
                                    right: 20px;
                                    @include wh(25px,25px);
                                    text-align: center;
                                    line-height: 20px;
                                    @include sc(20px,#fff);
                                    background: #007FCC;
                                    @include borderRadius(50%);
                                    overflow: hidden;
                                    font-weight: bold;
                                }
                            }
                            
                        }
                        
                        
                    }
                }
            }
            

        }
    }
</style>
