<template>
	<div id="category">
		<nav-bar class="nav-bar">
			<div slot="center">商品分类</div>
		</nav-bar>
		<div class="content">
			<tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>

			<scroll id="tab-content" :data="[categoryData]">
				<div>
					<tab-content-category :subcategories="showSubcategory"></tab-content-category>
					<tab-control :titles="['综合','新品','销量']" @itemClick="" tabClick></tab-control>
					<tab-content-detail></tab-content-detail>
				</div>
			</scroll>
		</div>
	</div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import TabMenu from "./childComps/TabMenu";
    import TabControl from "../../components/content/tabControl/TabControl";
    import TabContentCategory from "./childComps/TabContentCategory";
    import TabContentDetail from "./childComps/TabContentDetail";
    import Scroll from "../../components/common/scroll/Scroll";

    import {getCategory, getSubcategory, getCategoryDetail} from "network/category"
    import {POP, NEW, SELL} from "@/common/const"

    export default {
        name: 'Category',
        components: {
            NavBar, TabMenu, TabControl, TabContentCategory, TabContentDetail, Scroll
        },
        data() {
            return {
                categories: [],
                categoryData: {},
                currentIndex: -1
            }
        },
        created() {
            this._getCategory()
        },

        computed: {
            showSubcategory() {
                if (this.currentIndex === -1) return {}
                return this.categoryData[this.currentIndex].subcategories
            }
        },
        methods: {
            _getCategory() {
                getCategory().then(res => {
                    this.categories = res.data.category.list

                    //    初始化每个类别的子数据
                    for (let i = 0; i < this.categories.length; i++) {
                        this.categoryData[i] = {
                            subcategories: {},
                            categoryDetail: {
                                'pop': [],
                                'new': [],
                                'sell': []
                            }
                        }
                    }
                    //    请求第一个分类的数据

                    this._getSubcategories(0)
                })
            },
            _getSubcategories(index) {
                this.currentIndex = index;
                const mailKey = this.categories[index].maitKey;
                getSubcategory(mailKey).then(res => {
                    this.categoryData[index].subcategories = res.data
                    this.categoryData = {...this.categoryData}
                    this._getCategoryDetail(POP)
                    this._getCategoryDetail(NEW)
                    this._getCategoryDetail(SELL)
                })
            },

            _getCategoryDetail(type) {
                //  获取请求的miniwallkey
                const miniwallkey = this.categories[this.currentIndex].miniWallkey;
                //  发送请求传入miniwallkey和type
                getCategoryDetail(miniwallkey, type).then(res => {
                    //将获取的数据保存下来
                    this.categoryData[this.currentIndex].categoryDetail[type] = res
                    this.categoryData = {...this.categoryData}

                })

            },

            selectItem(index) {
                this._getSubcategories(index)
            }
        }

    }

</script>
<style scoped>
	.nav-bar {
		background-color: var(--color-tint);
		font-weight: 700;
		color: #fff;
	}

	#category {
		height: 100vh;
	}

	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
		display: flex;
	}

	#tab-content {
		height: 100%;
		flex: 1;
	}
</style>