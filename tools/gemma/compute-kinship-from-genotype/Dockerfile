# Use the existing GEMMA image from your Docker repository
FROM voltz2721/gemma:latest 

# Add the kinship.sh script to the image
COPY compute_kinship.sh /usr/local/bin/compute_kinship.sh
RUN chmod +x /usr/local/bin/compute_kinship.sh

# Set the working directory
WORKDIR /data

# Entry point for the container
ENTRYPOINT ["bash", "/usr/local/bin/compute_kinship.sh"]
#docker run --rm -v "$(pwd):/data" gemma-compute-kinship HLC
#docker run --rm -v "/home/volture2721/Desktop/Crop_Galaxy/GEMMA/example:/data" gemma-compute-kinship HLC
