import Taro from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import './index.scss'

interface Props {}

interface State {
  items: string[]
  itemInput: string
}
export default class Index extends Taro.Component<Props, State> {
  config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
    super(props)
    this.state = {
      items: ['起床', '编程', '睡觉'],
      itemInput: ''
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  addItem () {
    let { items, itemInput } = this.state

    if (itemInput === '') {
      return
    } else {
      items.push(itemInput)
    }

    this.setState({
      items,
      itemInput: ''
    })
  }

  // 输入框 onInput 的时候，它的值暂存起来
  inputHandler (e) {
    this.setState({
      itemInput: e.target.value
    })
  }

  delItem (index: number) {
    let { items } = this.state
    items.splice(index, 1)
    this.setState({
      items
    })
  }

  render () {
    let { items, itemInput } = this.state
    return (
      <View className='index'>
        <View className='list'>
          <Text>To-do List</Text>

          <View className='input-wrap'>
            <Input
              className='input'
              onInput={this.inputHandler.bind(this)}
              value={itemInput}
            />
            <Button className='btn add' onClick={this.addItem.bind(this)}>
              添加
            </Button>
          </View>

          <Text>已输入：{itemInput}</Text>

          {items.map((item, index) => (
            <View className='item-wrap' key={index}>
              <Text>
                {index + 1}. {item}
              </Text>
              <Button
                className='btn del'
                onClick={this.delItem.bind(this, index)}
              >
                删除
              </Button>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
