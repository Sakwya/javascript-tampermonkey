# AGE动漫播放进度记录  
>修正AGE部分线路的播放进度记录  

## 关于
AGE动漫的播放器记录存储在localStorage中的记录一共有两个，“artplayer_settings”和“spjx_settings”。  
“artplayer_settings”用于“自建云”线路（蓝色进度条），除此以外的线路（红色进度条）通过`m3u8`播放的视频使用的是“spjx_settings”。  
“spjx_settings”的记录有一个特点，就是只记录时间，不记录是什么的时间。  
没错，这就是这个网站的播放器的最大痛点（对我来说）！！  
每次看完一集选下一集时，都会跳转到上一集的播放进度，真的无语。

## 功能  
- 使用m3u8线路时,每次进入新的一集时，自动将进度条设置到最开始。  
- 同时储存上一次播放的进度，每条信息设置14天后过期。  
（过了14天后 我肯定不记得自己看了什么了）
- 如果当前视频有记录，会自动跳转到记录的位置。

## 说明
只有使用m3u8线路（红色进度条），脚本才会被使用。  
如果你觉得你的记忆力比较好，过一个月也记得上次的观看内容，你可以手动将过期时间设长点。  
```Javascript
// 找到下面这行，改个数字
if (lastRecordTime != "0") recordedSrc[lastSrc] = now + `过期时间(单位毫秒)`;
```