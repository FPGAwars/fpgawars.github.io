module Jekyll
  module Translate
    def translate(key)
      site = @context.registers[:site]
      strings = site.data["strings"]
      raise "Missing key `#{key}`" if not strings.key?(key)
      texts = strings[key]
      "<div class=\"en\">#{texts['en']}</div>
       <div class=\"es hidden\">#{texts['es']}</div>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::Translate)
