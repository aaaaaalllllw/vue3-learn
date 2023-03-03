# 利用Docker将项目部署到服务器

### 1.进入Jenkins找到对应页面
![image-step9](Deploy-steps.assets/step9.png)

### 2.点击configure找到项目地址
![image-step10](Deploy-steps.assets/step10.png)

### 3.拉取项目

![image-step1](Deploy-steps.assets/%E6%AD%A5%E9%AA%A4%E4%B8%80.png)

### 4.创建分支

![image-step2](Deploy-steps.assets/%E6%AD%A5%E9%AA%A42.png)

### 5.项目打包

```ts
npm run build
```

### 6.将打包后的项目dist剪切到cufcdeploy文件夹中

![image-step2](Deploy-steps.assets/%E6%AD%A5%E9%AA%A44.png)

### 7.cufcdeploy文件夹下的 nginx.conf中的内容修改

![image-step5](Deploy-steps.assets/%E6%AD%A5%E9%AA%A4%E4%BA%94.png)

### 8.在终端输入如下命令 

```ts
./deploy.sh webui webui 10.18.0.14:8000 5053 false Dockerfile-cufc-file dist
```

![image-step6](Deploy-steps.assets/%E6%AD%A5%E9%AA%A46.png)



### 9.使用docker ps -a查看你所创建的容器id

![image-step7](Deploy-steps.assets/%E6%AD%A5%E9%AA%A4%E4%B8%83.png)



### 10.打开gitlab查看项目进入到run文件 将id前四位修改

![image-step8](Deploy-steps.assets/%E6%AD%A5%E9%AA%A4%E5%85%AB.png)

### 11.成功后在浏览器输入 10.18.1.12:5053 进入到页面 部署成功