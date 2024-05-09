import pygame
import sys

import os



window = pygame.display.set_mode((800,800))
running  = True

while(running) :
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.MOUSEBUTTONDOWN:
            print("down")

    window.fill((255,255,255))

    pygame.draw.rect(window,'red',(15,15,15,15))

    pygame.display.update()

    

