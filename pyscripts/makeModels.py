import json
from 'models/diodes' import *

class ModelMaker:
    def __init__(self):
        self.file = 'models/diodes.js'

    def makeModel(self):
        with open (self.file) as myfile:
            self.myObj = json.load(myfile)
        
        for key in self.myObj:
            self.newModel = {
                "description" : "Model for " + key,
                "$ref": "#definitions/" + key,
                "definitions" : {
                    key: {
                        "type": "object",
                        "properties": {},
                        "required": [],
                        "title": key
                    }
                }
            }
            for opt in self.myObj[key]["entryOptions"]:
                self.newModel["definitions"][key]["properties"]["opt"]
        


def main():
    maker = ModelMaker()
    maker.makeModel()


if __name__ == "__main__":
    main()