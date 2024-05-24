from django.db import models

##Create your models here.
class City(models.Model):
    city_name=models.CharField(max_length=50)
    city_no=models.FloatField()
    city_info = models.CharField(max_length=50)
    city_map = models.ImageField(null=False, blank=True)

    def __str__(self):
        return f"city_name:{self.city_name} ve city_no: {self.city_no}"
