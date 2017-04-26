module Jekyll
  module Translate
    def translate(key)
      site = @context.registers[:site]
      strings = site.data["strings"]
      raise "Missing key `#{key}`" if not strings.key?(key)
      texts = strings[key]
      "<span class=\"en\">#{texts['en']}</span>
       <span class=\"es hidden\">#{texts['es']}</span>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::Translate)
