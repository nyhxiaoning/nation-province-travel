// Converted from React Native to Next.js using Tailwind CSS and native browser APIs
"use client";

import { useRef } from "react";

export default function PianoSinger() {
  const anchorRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToAnchor = (anchor: string) => {
    const el = anchorRefs.current[anchor];
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const speakText = (text: string) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.pitch = 1;
    utterance.rate = 0.8;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  const renderPiece = (title: string, description: string) => (
    <div className="my-4">
      <h3
        className="text-lg font-semibold text-blue-700 mb-1 cursor-pointer"
        onClick={() => speakText(title)}
      >
        🎵 {title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-sm bg-white p-3 rounded shadow">
        {description}
      </p>
    </div>
  );

  return (
    <div className="relative">
      {/* 锚点按钮栏 */}
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-around bg-white py-2 shadow-md">
        <button
          onClick={() => scrollToAnchor("bach")}
          className="text-blue-600 font-bold"
        >
          巴赫
        </button>
        <button
          onClick={() => scrollToAnchor("mozart")}
          className="text-blue-600 font-bold"
        >
          莫扎特
        </button>
        <button
          onClick={() => scrollToAnchor("beethoven")}
          className="text-blue-600 font-bold"
        >
          贝多芬
        </button>
        <button
          onClick={() => scrollToAnchor("Tchaikovsky")}
          className="text-blue-600 font-bold"
        >
          柴可夫斯基
        </button>
        <button
          onClick={() => scrollToAnchor("xxx2")}
          className="text-blue-600 font-bold"
        >
          xxx2
        </button>
      </div>

      <div className="pt-16 px-4 space-y-12 bg-gray-50 min-h-screen">
        {/* 巴赫 */}
        <section ref={(el) => (anchorRefs.current["bach"] = el)}>
          <h2 className="text-2xl font-bold mb-2">
            巴赫十二平均律：第一卷（BWV846-869）
          </h2>
          {renderPiece(
            "E小调，BWV855",
            "这首曲目以二声部的简洁形式展示出巴赫独到的复调艺术，前奏曲流动感极强，而赋格则展现出三声部之间清晰的对位关系，是学习复调技法的经典范例。"
          )}
          {renderPiece(
            "C大调，BWV846",
            "前奏曲如奥林匹亚的平静与晴朗，赋格曲为四声部，全曲由5个发展部组成。。"
          )}
          {renderPiece(
            "C小调，BWV847",
            "前奏曲速度变化频繁，后半段是粗犷的托卡塔风格，赋格曲为三声部。"
          )}

          {renderPiece(
            "升C大调，BWV848",
            "前奏曲气氛如沐浴夏日之阳光，赋格曲为三声部，有嘉禾舞曲风格。"
          )}

          {renderPiece(
            "升C小调，BWV849",
            "这是一首具有宗教性氛围的作品，前奏曲富有精神性，赋格曲以五声部展开，构成三重赋格，是作曲技术上的巅峰之作，被誉为最神圣的巴赫曲目之一。"
          )}

          <h2 className="text-2xl font-bold mb-2">
            巴赫十二平均律：第二卷（BWV870-893）
          </h2>
          {renderPiece(
            "E小调，BWV879",
            "前奏曲为科莱特舞曲风格的二声部创意曲，赋格曲为三声部，与E大调赋格曲形成强烈对照。"
          )}
          {renderPiece(
            "C大调，BWV870",
            "前奏曲庄重如管风琴曲，赋格曲为三声部，被评价为‘无邪的游戏’"
          )}
          {renderPiece(
            "C小调，BWV871",
            "前奏曲是宁静、优雅的阿勒曼舞曲，赋格曲为四声部，但大半以三声部展开。"
          )}

          {renderPiece(
            "升C大调，BWV872",
            "前奏曲快板部分是准赋格曲，赋格曲为四声部。"
          )}

          {renderPiece(
            "E大调，BWV878",
            "前奏曲是精致的三声部技法的完美体现，是这部曲集中最美的一首，赋格曲为四声部，呈帕莱斯特利那风格。"
          )}
        </section>

        {/* 莫扎特 */}
        <section ref={(el) => (anchorRefs.current["mozart"] = el)}>
          <h2 className="text-2xl font-bold mb-2">莫扎特：古典音乐：协奏曲与交响曲</h2>
          {renderPiece(
            "第21号钢琴协奏曲 第二乐章",
            "这一乐章以其温柔如水的旋律被誉为“最美慢板”，曾作为电影《走出非洲》的配乐而广为人知。钢琴部分仿佛在夜色中轻声低语，与弦乐背景形成完美融合，充满梦幻色彩。"
          )}
          {renderPiece(
            "第40号交响曲 第一乐章",
            "这部作品以极具动感的节奏和旋律揭示出莫扎特内心的激烈情绪冲突，是古典交响乐向浪漫主义过渡的重要代表。其主题充满张力，成为无数影视作品的配乐灵感来源。"
          )}

          {
            renderPiece(
              "《A大调单簧管协奏曲（K.622）》第二乐章",
              "单簧管如人声般倾诉，是莫扎特晚年的-天鹅之歌。"
            )
          }

          {
            renderPiece(
              "《第23号钢琴协奏曲（K.488）》第一乐章",
              "华丽琶音与抒情旋律交织，展现钢琴表现力的巅峰。"
            )
          }


          <h2 className="text-2xl font-bold mb-2">歌剧与室内乐</h2>



          {renderPiece(
            "《费加罗的婚礼》",
            "少年凯鲁比诺唱出对爱情的懵懂，旋律轻快灵动,你们可知道什么是爱情。"
          )}

          {renderPiece(
            "《弦乐小夜曲（K.525）》第一乐章",
            "轻快拨弦营造轻松氛围，是婚礼常用的经典背景乐。"

          )}

          {renderPiece(
            "《唐璜》",
            "弦乐伴奏与唐璜张扬的旋律对比，戏剧张力十足,快到窗前来。"
          )}

          {renderPiece(
            "《魔笛》",
            "花腔女高音直冲High F，展现复仇的疯狂,夜后咏叹调"
          )}

          <h2 className="text-2xl font-bold mb-2">宗教与晚期作品</h2>
          {renderPiece(
            "《安魂曲（K.626）》",
            "临终未完成的遗作，合唱庄严悲怆，充满宿命感"
          )}

          {renderPiece(
            "《D大调嬉游曲（K.136）》第一乐章",
            "木管乐器交织出明快旋律，展现早期作品的活泼童趣。"
          )}
        </section>


        {/* 贝多芬 */}
        <section ref={(el) => (anchorRefs.current["beethoven"] = el)}>
          <h2 className="text-2xl font-bold mb-2">贝多芬交响曲与钢琴奏鸣曲</h2>
          {renderPiece(
            "第五交响曲（命运） 第一乐章",
            "以“命运敲门”的四个音符开场，这首乐章成为古典音乐中最为人熟知的旋律之一。贝多芬通过反复发展这一主题，描绘出个人命运抗争的壮丽图景，震撼力十足。"
          )}
          {renderPiece(
            "第九交响曲 欢乐颂",
            "《第九交响曲》是贝多芬晚年耳聋情况下的巅峰之作，第四乐章引入合唱部分，将席勒的《欢乐颂》诗句与交响曲融合，象征自由、博爱与人类团结，成为欧盟官方颂歌。"
          )}
          {renderPiece(
            "月光奏鸣曲 第一乐章",
            "贝多芬为其学生而作，这首慢板开篇如月光洒落湖面，静谧而忧郁，表达了无声的痛苦与深情。其后乐章激情澎湃，整首作品表现出情感的深层波动。"
          )}
          {
            renderPiece(
              "《悲怆奏鸣曲》第二乐章",
              "温柔如歌的慢板，抚慰人心的温暖旋律。"
            )
          }

          {
            renderPiece(
              "《热情奏鸣曲》第三乐章",
              "暴风雨般的急板，被李斯特称为:火山的爆发"
            )
          }


          <h2 className="text-2xl font-bold mb-2">协奏曲与室内乐</h2>
          {renderPiece(
            "《小提琴协奏曲》第一乐章",
            "小提琴华彩如夜莺歌唱，被誉为:小提琴协奏曲之王"
          )}

          {renderPiece(
            "《第三交响曲（英雄）》第二乐章:葬礼进行曲", 
            "庄严节奏隐喻对英雄的缅怀。"
          )}


          <h2 className="text-2xl font-bold mb-2">宗教音乐与标题音乐</h2>
          {renderPiece(
            "《庄严弥撒》:垂怜经",
            "合唱与管弦乐的宏大织体，展现对信仰的敬畏。"
          )}

          {renderPiece(
            "《第六交响曲（田园）》第二乐章:溪边景色",
            "长笛模仿鸟鸣，描绘自然音画。"
          )}
          {renderPiece(
            "《钢琴三重奏:大公（Op.97）》第二乐章",
            "三件乐器如老友谈心，展现晚年平和。"
          )}

        </section>

        {/* 柴可夫斯基 */}
        <section ref={(el) => (anchorRefs.current["Tchaikovsky"] = el)}>
          <h2 className="text-2xl font-bold mb-2">柴可夫斯基:芭蕾舞剧</h2>
          {renderPiece(
            "天鹅湖 圆舞曲",
            "作为古典芭蕾最重要的代表作之一，《天鹅湖》圆舞曲展现了梦幻与哀愁的交织。旋律优美，节奏轻盈，是描述童话故事中白天鹅与王子爱情的关键音乐场景。"
          )}

          {renderPiece(
            "《胡桃夹子》花之圆舞曲",
            "轻盈的节奏与绚丽的配器，描绘出糖果王国的梦幻场景"
          )}

          {renderPiece(
            "《睡美人》玫瑰柔板",
            "弦乐与木管交织出温柔的旋律，象征公主苏醒时的浪漫氛围"
          )}

          <h2 className="text-2xl font-bold mb-2">柴可夫斯基:交响曲</h2>
          {renderPiece(
            "《第四交响曲》第一乐章",
            "命运主题与抒情旋律的强烈对比，揭示了作曲家内心的挣扎。"
          )}

          {renderPiece(
            "《第六交响曲（悲怆）》第四乐章",
            "低沉的旋律如泣如诉，以绝望的慢板结束，预示着作曲家的早逝。"
          )}


          <h2 className="text-2xl font-bold mb-2">柴可夫斯基:协奏曲与室内乐</h2>



          {renderPiece(
            "第一钢琴协奏曲 第一乐章",
            "此乐章开篇即以华丽雄浑的钢琴和弦震撼人心，是柴可夫斯基最著名、演出最多的作品之一。旋律鲜明、节奏张力十足，体现了作曲家对钢琴表现力的极致掌控。"
          )}

          {renderPiece(
            "《小提琴协奏曲》第一乐章",
            "小提琴明亮的音色与乐队的宏大音响交织，被誉为：小提琴协奏曲之王。"
          )}

          <h2 className="text-2xl font-bold mb-2">序曲与交响诗</h2>
          {renderPiece(
            "1812序曲",
            "这首以俄法战争为背景的作品，以极具戏剧性的展开、钟声与炮声的运用而闻名，完美呈现了民族自豪与胜利的豪情。常用于重大庆典和烟火表演中。"
          )}

          {renderPiece(
            "《罗密欧与朱丽叶》幻想序曲",
            "悲剧性的主题与热烈的爱情旋律交替出现，展现了莎士比亚的经典故事"
          )}

          <h2 className="text-2xl font-bold mb-2">歌剧选段</h2>
          {renderPiece(
            "《叶甫盖尼·奥涅金》:连斯基的叙事曲",
            "男高音深情演绎，表达了年轻诗人对爱情的向往与失落。"
          )}

        </section>

        {/* 额外锚点保留 */}
        <section ref={(el) => (anchorRefs.current["xxx2"] = el)}>
          <h2 className="text-2xl font-bold">xxx2（预留内容）</h2>
          <p className="text-gray-600">可用于后续添加新的作曲家或专题内容。</p>
        </section>
      </div>
    </div>
  );
}
