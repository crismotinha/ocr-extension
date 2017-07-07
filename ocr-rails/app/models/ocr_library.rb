require 'ocr_space'

class OcrLibrary
  def self.convert_image(url)
    resource.convert(url: url)
  end

  private

  def resource
    OcrSpace::Resource.new(apikey: '83db5e8c7088957')
  end
end