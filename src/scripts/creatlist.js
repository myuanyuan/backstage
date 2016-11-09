function sidebar() {
    this.list = [
      new newList('主页','fa-dashboard'),
      new newList('布局','fa-laptop','label-success','Boxed Page', 'Horizontal Menubar', 'Language Bar', 'Email Templates'),
      new newList('显示设置','fa-book','label-info','通用', '按钮', '窗口', '进度条', '层级列表', '三视图', '图标'),
      new newList('组件','fa-cogs','label-primary','Grids', 'Calendar', 'Gallery', 'Todo List', 'Draggable'),
      new newList('表单','fa-tasks','label-info ','Form', 'Advanced', 'Wizards', 'Validation', 'Upload')
    ]
}

sidebar.prototype.getlist = function (tit) {       //通过tit获取
    for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].tit == tit){
            return this.list[i];
            }
    }
    return null;
};
