from lxml import etree

archivo = '006-formulario.xml'
esquema = '007-esquema.xsd'

xml = etree.parse(archivo)
xmlesquema = etree.XMLSchema(file=esquema)

if xmlesquema.validate(xml):
    print("valida OK")
else:
    print("no valida")
    print(schema.error_log)
