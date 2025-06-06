const fs = require('fs').promises;
const path = require('path');
const https = require('https');

// 读取文件并获取数据的函数
async function fetchMapData(adcode) {
    return new Promise((resolve, reject) => {
        const url = `https://geo.datav.aliyun.com/areas/bound/${adcode}_full.json`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

// 主函数
async function main() {
    try {
        // 读取中国地图数据（从项目根目录读取）
        const chinaMapPath = path.join(__dirname, '', 'china.json');
        const chinaMapData = await fs.readFile(chinaMapPath, 'utf8');
        const chinaMap = JSON.parse(chinaMapData);

        // 创建保存目录（确保 public/maps 目录存在）// 根目录下的 public/maps
        const saveDir = path.join(__dirname, '..', 'public', 'maps');
        await fs.mkdir(saveDir, { recursive: true });

        // 获取所有省份信息
        const provinces = chinaMap.features
            .filter(feature => feature.properties.level === 'province')
            .map(feature => ({
                adcode: feature.properties.adcode,
                name: feature.properties.name
            }));

        // 为每个省份获取并保存数据
        for (const province of provinces) {
            console.log(`正在处理: ${province.name}`);
            try {
                const mapData = await fetchMapData(province.adcode);
                const savePath = path.join(saveDir, `${province.name}.json`);
                await fs.writeFile(savePath, mapData, 'utf8');
                console.log(`✅ ${province.name} 保存成功`);

                // 添加延迟以避免请求过快
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                console.error(`❌ ${province.name} 处理失败:`, error.message);
            }
        }

        console.log('所有省份地图数据处理完成！');
    } catch (error) {
        console.error('程序执行出错:', error);
    }
}

// 运行程序
main();