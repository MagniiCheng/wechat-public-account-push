/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: 'wechat-test',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx78c43b562df11b81',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '686cc680a0884836998d44672ff60853',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '加盐宝贝🧂',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o6cKL6PGajDIyARSbFPz8F3HoRI4",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'X-8u6icmFRHfNz0UNq1XR67Pw4By5qsd5AsDWj0WZww',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '加盐宝贝🧂', year: '1998', date: '11-02',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '心碎小狗', year: '1997', date: '11-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-26' },
      ],
    },
  ],

  
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '93b058531a528b0bd966daa60a88eeb5',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 3,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },
  

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'tl7A-z1NxoGjg_NCNGhLa4GiEBT7FQDdFeL4gdc0S8M',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6cKL6FIJP03OZ-36s2tySr79l88',
    }
  ],

}

module.exports = USER_CONFIG

