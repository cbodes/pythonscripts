import json

class ModelMaker:
    def __init__(self):
        self.file = 'menuItems.json'

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
                        "properties": {

    "meta": {
        "type" : "object",
        "properties": {
      "part_number": {"type": "string"},
      "distributor": {"type": "string"},
      "quantity": {"type": "number"}
        }
    }
                        },
                        "required": [],
                        "title": key
                    }
                }
            }
            for opt in self.myObj[key]["entryOptions"]:
                self.newModel["definitions"][key]["properties"][opt] = {
                    "type": "object",
                    "properties": {
                    "value": {"type": "number"},
                    "strValue": {"type": "string"}
                    }
                }
            with open(key + ".json", "w") as f:
                json.dump(self.newModel, f, indent=2)
        


def main():
    maker = ModelMaker()
    maker.makeModel()


if __name__ == "__main__":
    main()