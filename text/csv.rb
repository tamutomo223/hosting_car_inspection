require "csv"
require 'json'

csv_m = CSV.read("./小型マルチ.csv")
csv_d = CSV.read("./大小兼用.csv")
csv_n = CSV.read("./二輪.csv")

def id_change(array,data)
  array << data[0..8]
  array << data[9..19]
  array << data[20..31]
end  

# -----小型マルチテキスト抽出-------
new_csv_m = csv_m.map do |e|
  e.compact!
  e.drop(1)
end

new_csv_m.delete_if{|i| i.empty?}
trans_csv_m = new_csv_m.transpose
ja_m = trans_csv_m[0]
en_m = trans_csv_m[1]
ch_1_m = trans_csv_m[2]
ch_2_m = trans_csv_m[3]
ko_m = trans_csv_m[4]
pr_m = trans_csv_m[5]

def id_change_m(data)

  array = []
  array << data[0..8]
  array << data[9..19]
  array << data[20..33]
  array << data[34..40]
  array << data[41..48]
  array << data[49..63]
  array << data[64..78]
  array << data[79..90]
  array << data[91..95]

  return array
end


ja_m_id = id_change_m(ja_m)
en_m_id = id_change_m(en_m)
ch_1_m_id = id_change_m(ch_1_m)
ch_2_m_id = id_change_m(ch_2_m)
ko_m_id = id_change_m(ko_m)
pr_m_id = id_change_m(pr_m)


# -----小型マルチテキスト抽出-------



# -----大小兼用テキスト抽出-------
new_csv_d = csv_d.map do |e|
  e.compact!
  e.drop(1)
end

new_csv_d.delete_if{|i| i.empty?}
trans_csv_d = new_csv_d.transpose
ja_d = trans_csv_d[0]
en_d = trans_csv_d[1]
ch_1_d = trans_csv_d[2]
ch_2_d = trans_csv_d[3]
ko_d = trans_csv_d[4]
pr_d = trans_csv_d[5]

def id_change_d(data)

  array = []
  array << data[0..6]
  array << data[7..18]
  array << data[19..32]
  array << data[33..48]
  array << data[49..63]
  array << data[64..78]
  array << data[79..90]
  array << data[91..95]

  return array
end

ja_d_id = id_change_d(ja_d)
en_d_id = id_change_d(en_d)
ch_1_d_id = id_change_d(ch_1_d)
ch_2_d_id = id_change_d(ch_2_d)
ko_d_id = id_change_d(ko_d)
pr_d_id = id_change_d(pr_d)

# -----大小兼用テキスト抽出-------


# -----二輪テキスト抽出-------
new_csv_n = csv_n.map do |e|
  e.compact!
  e.drop(1)
end

new_csv_n.delete_if{|i| i.empty?}
trans_csv_n = new_csv_n.transpose
ja_n = trans_csv_n[0]
en_n = trans_csv_n[1]
ch_1_n = trans_csv_n[2]
ch_2_n = trans_csv_n[3]
ko_n = trans_csv_n[4]
pr_n = trans_csv_n[5]

def id_change_n(data)

  array = []
  array << data[0..13]
  array << data[14..23]
  array << data[24..32]
  array << data[33..42]
  array << data[43..46]

  return array
end

ja_n_id = id_change_n(ja_n)
en_n_id = id_change_n(en_n)
ch_1_n_id = id_change_n(ch_1_n)
ch_2_n_id = id_change_n(ch_2_n)
ko_n_id = id_change_n(ko_n)
pr_n_id = id_change_n(pr_n)
# -----二輪テキスト抽出-------


# en_hash = {
#   language: "en",
#   header: ["English",{modal: "Please wait."}],
#   device: {},
#   inspection: {
#     sideMenu:{
#       carText:[{id:1, text:"サイドスリップ検査"},{id:2, text:"スピードメータ検査"},{id:3, text:"ヘッドライト検査"},{id:4, text:"フットブレーキ検査"},{id:5, text:"駐車ブレーキ検査"},
#                {id:6, text:"排気ガス検査"},{id:7, text:"DS・オパシ検査"},{id:8, text:"下回り検査"},{id:9, text:"その他"}],
#       trafficText:[{id:1, text:"サイドスリップ検査"},{id:2, text:"ブレーキ検査"},{id:3, text:"スピードメータ検査"},{id:4, text:"ヘッドライト検査"},{id:5, text:"排気ガス検査"},
#                    {id:6, text:"DS・オパシ検査"},{id:7, text:"下回り検査"},{id:8, text:"その他"}],
#       bikeText:[{id:1, text:"排気ガス検査"},{id:2, text:"ブレーキ検査"},{id:3, text:"スピードメータ検査"},{id:4, text:"ヘッドライト検査"},{id:5, text:"その他"}]
#     },
#     mainText: {
#       carText:[{id:1, list:en_m_id[0]},{id:2, list:en_m_id[1]},{id:3, list:en_m_id[2]},{id:4, list:en_m_id[3]},{id:5, list:en_m_id[4]},
#                 {id:6, list:en_m_id[5]},{id:7, list:en_m_id[6]},{id:8, list:en_m_id[7]},{id:9, list:en_m_id[8]}],
#       trafficText:[{id:1, list:en_d_id[0]},{id:2, list:en_d_id[1]},{id:3, list:en_d_id[2]},{id:4, list:en_d_id[3]},{id:5, list:en_d_id[4]},
#                    {id:6, list:en_d_id[5]},{id:7, list:en_d_id[6]},{id:8, list:en_d_id[7]}],
#       bikeText:[{id:1, list:en_n_id[0]},{id:2, list:en_n_id[1]},{id:3, list:en_n_id[2]},{id:4, list:en_n_id[3]},{id:5, list:en_n_id[4]}]
#     }
#   }
# }

en_hash = {
  language: "en",
  header: ["English",{modal: "Please wait."}],
  device: {},
  inspection: {
    sideMenu:{
      carText:[{id:1, text:"サイドスリップ検査"},{id:2, text:"スピードメータ検査"},{id:3, text:"ヘッドライト検査"},{id:4, text:"フットブレーキ検査"},{id:5, text:"駐車ブレーキ検査"},
               {id:6, text:"排気ガス検査"},{id:7, text:"DS・オパシ検査"},{id:8, text:"下回り検査"},{id:9, text:"その他"}],
      trafficText:[{id:1, text:"サイドスリップ検査"},{id:2, text:"ブレーキ検査"},{id:3, text:"スピードメータ検査"},{id:4, text:"ヘッドライト検査"},{id:5, text:"排気ガス検査"},
                   {id:6, text:"DS・オパシ検査"},{id:7, text:"下回り検査"},{id:8, text:"その他"}],
      bikeText:[{id:1, text:"排気ガス検査"},{id:2, text:"ブレーキ検査"},{id:3, text:"スピードメータ検査"},{id:4, text:"ヘッドライト検査"},{id:5, text:"その他"}]
    },
    mainText: {
      carText:[],
      trafficText:[],
      bikeText:[]
    }
  }
}



en_m_id.each_with_index do |e,i|
  en_hash[:inspection][:mainText][:carText] << {id:i+1,list:e}
end  
en_hash[:inspection][:mainText][:carText].each_with_index do |e,i|
  e[:japan] = ja_m_id[i]
end
en_m_id.each_with_index do |e,i|
  en_hash[:inspection][:mainText][:trafficText] << {id:i+1,list:e}
end  
en_hash[:inspection][:mainText][:trafficText].each_with_index do |e,i|
  e[:japan] = ja_m_id[i]
end
en_m_id.each_with_index do |e,i|
  en_hash[:inspection][:mainText][:bikeText] << {id:i+1,list:e}
end  
en_hash[:inspection][:mainText][:bikeText].each_with_index do |e,i|
  e[:japan] = ja_m_id[i]
end


en_json = JSON.generate(en_hash)
en_json.delete! '\\'
p en_json

