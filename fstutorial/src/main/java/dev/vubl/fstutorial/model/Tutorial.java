package dev.vubl.fstutorial.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tutorials")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Tutorial {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  @Column(name = "title")
  private String title;
  @Column(name = "description")
  private String description;
  @Column(name = "published")
  private boolean published;
}
