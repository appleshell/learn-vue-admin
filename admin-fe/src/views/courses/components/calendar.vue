<template>
    <div class="calendar">
        <el-calendar v-model="value">
            <template v-slot:dateCell="{date, data}">
                <!-- {{ data.day.split('-').slice(1).join('-') }} -->
                {{ data.day.split('-')[2] }}
                <div class="date-item" @click="getDate(date, data)">
                    <div v-for="(item, index) in taskArray(data.day)" :key="index" class="task-item" :class="`task${item.status ? item.status : ''}`">
                        <el-popover
                            placement="top"
                            trigger="hover"
                            :content="item.taskName"
                        >
                            <div slot="reference" class="task-content">
                                <span>{{item.taskOwner}}</span>-<span>{{item.taskName}}</span>
                            </div>
                        </el-popover>
                    </div>
                </div>
            </template>
        </el-calendar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: new Date()
        }
    },
    props:{
        taskList: {
            type: Object,
            default() {
                return []
            }
        },
    },
    computed: {
        taskArray() {
            return (date) => {
                return this.taskList[date] ? this.taskList[date].task : []
            }
        }
    },
    watch:{
        value(val) {
            console.log(val)
        }
    },
    created() {
    
    },
    mounted() {
        // console.log(this.taskArray)
    },
    methods: {
        getDate(date, data) {
            console.log(data, date)
        }
    }
}
</script>

<style lang="scss">
    .is-selected {
        // color: #1989FA
    }
    .date-item {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        font-size: 12px;
        .task-item{
            border-radius: 2px;
            padding: 2px;
            margin-bottom: 2px;
            .task-content{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
            }
        }
        .task1{
            background-color: red;
        }
        .task2{
            background-color: orange;
        }
        .task3{
            background-color: yellow;
        }
        .task4{
            background-color: yellowgreen;
        }
    }
</style>