import pyqrcode

text = "This is a Message for my love VR"

email = "mailto:printplus790@gmail.com?subject=Regarding Quotation for Revathi&body=Pls Share your quotation for 1000 nos visiting cards"

mobile = """BEGIN:VCARD
VERSION:4.0
TEL;VALUE:+91 78996 87152
END:CARD
"""

location = f"https://maps.app.goo.gl/EJoks3gqAQC4UJnJ6"

website = f"www.printplusonline.com"

contact = f"""BEGIN:VCARD
VERSION:4.0
N:Gump;Forrest;;Mr.;
FN:Sheri Nom
ORG:
TITLE:
PHOTO;
TEL;TYPE#work,voice;VALUE#uri:tel:+1-111-555-1212
TEL;TYPE#home,voice;VALUE#uri:tel:+1-404-555-1212
ADR;TYPE#WORK;PREF#1;LABEL#"Normality\nBaytown, LA 50514\nUnited States of America":;;100 Waters Edge;Baytown;LA;50514;United States of America
EMAIL:sherinnom@example.com

END:VCARD
"""


def create_qr(data):
    # qr_obj = pyqrcode.create(location)
    # qr_obj = pyqrcode.create(website)
    qr_obj = pyqrcode.create(data)

    qr_obj.png("location.png", scale=8)



if __name__ == '__main__':
    create_qr(text)