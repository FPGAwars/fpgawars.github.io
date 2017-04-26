module Jekyll
  module Translate
    def translate(key)
      site = @context.registers[:site]
      text_en = site.data['strings'][key]['en']
      text_es = site.data['strings'][key]['es']
      "<div class=\"en\">#{text_en}</div>
       <div class=\"es hidden\">#{text_es}</div>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::Translate)
